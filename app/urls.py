from django.urls import path
from .import views

urlpatterns = [
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register/<str:usertype>", views.register, name="register"),

    # path("load_roi", views.load_roi, name="load_roi"),
    # path("get_loan_status", views.get_loan_status, name="get_loan_status"),

    path("", views.index, name="index"),
    path("about", views.about, name="about"),
    path("services", views.services, name="services"),
    path("contact", views.contact, name="contact"),
    path("applyLoan", views.applyLoanFrom, name="applyLoan"),  # Apply Loan Form
    path("borrowerList", views.borrowerList, name="borrowerList"),  # order lists
    path("loanapplied", views.loan_applied, name="loanapplied"),  # applied loan list
    path("loanStatus", views.loanStatus, name="loanStatus"),  # loan status
    path("loanRejected", views.loanRejected, name="loanRejected"),  # loan status
# path("loanDetail", views.loanDetailInfo, name="loanDetail"),  # loan status
]
